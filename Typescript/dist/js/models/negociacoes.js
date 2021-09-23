export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
//private negociacoes: Negociacao[] = [] === private negociacoes: Array<Negociacao> = []
//lista(): readonly Negociacao[] {} === lista(): ReadonlyArray<Negociacao> {
