using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConversoesEOutrosTiposNumericos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 4 - Conversoes e Outros Tipos Numericos");

            double salario = 1200.50;
            int salarioEmInteiro = (int)salario;

            Console.WriteLine(salarioEmInteiro);

            //int => variável de 32 bits
            //long => variável de 64 bits
            long idade = 13000000000;

            //short => variável de 16 bits
            short quantidadeProdutos = 150;

            float altura = 1.80f;

            Console.WriteLine(altura);
            Console.WriteLine(quantidadeProdutos);
            Console.WriteLine(idade);

            Console.ReadLine();
        }
    }
}
