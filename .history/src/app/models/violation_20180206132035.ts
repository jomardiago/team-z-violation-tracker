export class Violation {
    constructor(
        public violationType: string,
        public equivalentPoints: number,
        public startDate: string,
        public expiryDate: string
    ) {}
}
