import React, { useEffect, useState } from 'react';
import Layout from '../../component/layout/layout';
import FolderComponent from '../../component/FolderComponent';
import { useRouter } from 'next/router';

const MyComponent: React.FC = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Array<any>>([]);
  const [isLoadingChildren, setIsLoadingChildren] = useState(true);

  useEffect(() => {
    const init = async () => {
      const url = `${process.env.NEXT_PUBLIC_SSUNBIRD_BASE_URL}/api/framework/v1/read/${process.env.NEXT_PUBLIC_FRAMEWORK}`;
      const frameworkData = await fetch(url).then((res) => res.json());
      const frameworks = frameworkData?.result?.framework?.categories;
      const fdata =
        frameworks.find((item: any) => item.code === 'topic')?.terms || [];
      console.log(fdata);
      setCategories(fdata || []);
      setIsLoadingChildren(false);
    };
    init();
  }, []);

  const handleClick = (category: any) => {
    router.push(`/quick-access/${category.name}`);
  };

  return (
    <Layout isLoadingChildren={isLoadingChildren} backTitle={'Quick Access'}>
      <FolderComponent categories={categories} onClick={handleClick} />
    </Layout>
  );
};

export default MyComponent;
