import { authService } from "../src/services/auth/authService";

function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page Server Side Render</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export default AuthPageSSR;

// decorator pattern
function withSession(funcao) {
  return async (ctx) => {
    try {
      const session = await authService.getSession(ctx);
      const ctx = {
        session: "sessão demo",
      };

      const modifiedCtx = {
        ...ctx,
        req: {
          ...ctx.req,
          session: "Nome do usuário",
        },
      };
      return funcao(modifiedCtx);
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: "/?error=401",
        },
      };
    }
  };
}

export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    },
  };
});

// export async function getServerSideProps(ctx) {
//   try {
//     const session = await authService.getSession(ctx);
//     return {
//       props: {
//         session,
//       },
//     };
//   } catch (err) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/?error=401",
//       },
//     };
//   }
// }
