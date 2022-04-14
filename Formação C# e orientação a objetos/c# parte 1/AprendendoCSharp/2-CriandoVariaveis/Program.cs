using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_CriandoVariaveis
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 2 - Criando Variaveis");

            //int idade;
            //idade = 32;
            int idade = 32;

            Console.WriteLine(idade);
            
            idade = 10 + 5 * 2;
            Console.WriteLine(idade);

            idade = (10 + 5) * 2;
            Console.WriteLine(idade);

            //idade = (10 + 5) * 2;
            //Console.Write(idade);

            idade = (10 + 5) * 2;
            Console.WriteLine("Sua idade é " + idade + "anos!");

            Console.WriteLine("Execução finalizada. Tecle enter para finalizar ...");
            Console.ReadLine();
        }
    }
}
