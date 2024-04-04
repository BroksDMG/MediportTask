import EnhancedTableHead from "../EnhancedTableHead";
import { TagsApiData } from "../../types/TagsApiData";
export default {
    title: 'Components/EnhancedTableHead',
    component: EnhancedTableHead,
  }

  const sampleHeadProps = {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TagsApiData) => {},
    order: 'asc' as const,
    orderBy: 'name',
    rowCount: 10, // Sample row count
  };
  
  export const Default = () => <EnhancedTableHead {...sampleHeadProps} />;