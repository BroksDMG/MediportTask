export interface TagsApiData {
    answer_id: number;
    content_license: string;
    creation_date: number;
    is_accepted: boolean;
    last_activity_date: number;
    last_edit_date: number;
    owner: {
      account_id: number;
      display_name: string;
      link: string;
      profile_image: string;
      reputation: number;
      user_id: number;
      user_type: string;
    };
    question_id: number;
    score: number;
  }