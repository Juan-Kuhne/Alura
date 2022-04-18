using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace P13_ForEncadeado
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 13");

            // Escrevendo astericos com o break
            for (int contadorLinha = 0; contadorLinha < 10; contadorLinha++)
            {
                for (int contadorColuna = 0; contadorColuna < 10; contadorColuna++)
                {
                    if (contadorColuna > contadorLinha) break;
                    Console.Write("*");
                }
                Console.WriteLine();
            }

            // Escrevendo astericos de uma forma diferente
            for (int contadorLinha = 0; contadorLinha < 10; contadorLinha++)
            {
                for (int contadorColuna = 0; contadorColuna <= contadorLinha; contadorColuna++) Console.Write("*");
                Console.WriteLine();
            }

            Console.ReadLine();
        }
    }
}
