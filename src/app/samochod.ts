export class Samochod {
    marka: string;
    model: string;
    rok: number;

    constructor(marka?: string, model?: string, rok?: number) {
        this.marka = marka;
        this.model = model;
        this.rok = rok;
    }
}
