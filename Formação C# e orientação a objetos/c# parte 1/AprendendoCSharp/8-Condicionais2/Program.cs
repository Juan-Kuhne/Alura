using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8_Condicionais2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 8");

            int idadeJoao = 18;
            int quantidadePessoas = 2;
            bool acompanhado = quantidadePessoas >= 2;

            //if (idadeJoao >= 18 || quantidadePessoas >= 2)
            //if (idadeJoao >= 18 && quantidadePessoas >= 2)
            if (idadeJoao >= 18 && acompanhado)
            {
                Console.WriteLine("Pode entrar.");
            }
            else
            {
                Console.WriteLine("Não pode entrar ...");
            }

            Console.ReadLine();
        }
    }
}
