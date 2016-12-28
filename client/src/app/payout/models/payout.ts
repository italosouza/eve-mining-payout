import { CoreObject } from '../../shared/core.object';

export class Payout extends CoreObject {
    public history: string;
    public playerName: string;
    public oreName: string;
    public amount: number;


    constructor() {
      super();
    }
}
