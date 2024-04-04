export interface TagsApiData {
    count: number;
    name: string;
    has_synonyms: boolean;
    is_required: boolean;
    is_moderator_only: boolean;
    collectives: [{
      description: string;
      link: string;
      name: string;
      external_links:[{link: string,type: string}];
      slag: string;
      tags: [string];
    }];
  }