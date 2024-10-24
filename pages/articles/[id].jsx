import ArticleDetail from '@/src/components/article/ArticleDetail';
import DropdownProvider from '@/src/contexts/DropdownContext';

export default function ArticleDetailPage() {
  return (
    <DropdownProvider>
      <ArticleDetail />
    </DropdownProvider>
  );
}
