import { useRouter } from "next/router";
import React from "react";
import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login({ username, password }) {
    console.log(username, password);
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { username, password },
    }).then(async (serverResponse) => {
      if (!serverResponse.ok) throw new Error("Usuário ou senha inválidos ...");
      const body = serverResponse.body;

      tokenService.save(body.data.access_token);
    });
  },

  async getSession(ctx = null) {
    const token = tokenService.get(ctx);
    //prettier-ignore
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
    .then((response) => {
      if(!response.ok) throw new Error('Não autorizado')

      return response.body.data;
    })
  },
};

export function useSession() {
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    authService
      .getSession()
      .then((userSession) => {
        setSession(userSession);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: {
      session,
    },
    error,
    loading,
  };
}

export function withSessionHOC(Component) {
  return function Wrapper(props) {
    const router = useRouter();
    const session = useSession();

    if (!session.loading && session.error) router.push("/?error=401");

    const modifiedProps = {
      ...props,
      session: session.data.session,
    };
    return <Component {...modifiedProps} />;
  };
}
