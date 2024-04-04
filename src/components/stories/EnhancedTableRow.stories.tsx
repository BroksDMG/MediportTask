import EnhancedTableRow from '../EnhancedTableRow';
import { TagsApiData } from '../../types/TagsApiData';

export default {
  title: 'Components/EnhancedTableRow',
  component: EnhancedTableRow,
};

const sampleRow: TagsApiData = {
  count: 687307,
  name: "ios",
  has_synonyms: true,
  is_required: false,
  is_moderator_only: false,
  collectives: [
    {
      description: "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
      link: "/collectives/mobile-dev",
      name: "Mobile Development",
      external_links: [{ link: "https://stackoverflow.com", type: "stackoverflow" }],
      slag: "mobile-dev",
      tags: ['android']
    }
  ]
};

export const Default = () => <EnhancedTableRow row={sampleRow} />;