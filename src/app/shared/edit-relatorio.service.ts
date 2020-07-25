import {Injectable} from '@angular/core';
import {FillCoverGQL} from '../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class EditRelatorioService {

  constructor(
    private fillCoverGQL: FillCoverGQL
  ) {
  }

  fillCover(relId) {
    this.fillCoverGQL.mutate({relId, companyLogo: 'first'}).subscribe(result => {
      console.log(result.data.fillCover.cover.companyLogo);
    });
  }
}
