export class Violation {
    constructor(
        private violationType: string,
        private equivalentPoints: number,
        private startDate: string,
        private expiryDate: string
    ) {}
}
