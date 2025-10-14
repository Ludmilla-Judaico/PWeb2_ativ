export class Exam{
    constructor(resposta ,peso){
        this._resposta = resposta
        this._peso = peso
        this._provas = []
    }

    add(exam){
        exam.nota = Object.keys(exam.values).reduce((acc, q) => {
            return acc + (exam.values[q] === this._resposta.values[q] ? this._peso[q] : 0)
        }, 0)
        this._provas.push(exam)
    }
    
    avg(){
        let gabarito = this._provas.reduce((acc, exame) => acc + exame.nota, 0)
        return gabarito / this._provas.length
    }

    min(){
        let notas = this._provas.map(n => n.nota)
        notas.sort((a, b) => a - b)
        return [notas[0]]
    }

    max(){
        let notas = this._provas.map(n => n.nota)
        notas.sort((a, b) => b - a)
        return [notas[0]]
    }

    lt(limite){
        let notas = this._provas.map(n => n.nota).filter(n => n < limite)
        return notas
    }

    gt(limite){
        let notas = this._provas.map(n => n.nota).filter(n => n > limite)
        return notas
    }
}