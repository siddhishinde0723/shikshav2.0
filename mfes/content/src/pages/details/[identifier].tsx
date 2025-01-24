import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { Layout } from '@shared-lib';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid2';
import CommonCollapse from '../../components/CommonCollapse'; // Adjust the import based on your folder structure
import { hierarchyAPI } from '../../services/Hierarchy';

interface DetailsProps {
  details: any;
}

export default function Details({ details }: DetailsProps) {
  const router = useRouter();
  const { identifier } = router.query; // Fetch the 'id' from the URL
  const [searchValue, setSearchValue] = useState('');
  const [selectedContent, setSelectedContent] = useState<any>(null);
  useEffect(() => {
    if (identifier) {
      console.log('Details:', identifier);
    }
  }, [identifier]);

  const handleAccountClick = () => {
    console.log('Account clicked');
  };

  const handleMenuClick = () => {
    console.log('Menu icon clicked');
  };

  const handleSearchClick = () => {
    console.log('Search button clicked');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const getDetails = async (identifier: string) => {
    try {
      const result = await hierarchyAPI(identifier);
      const trackable = result?.trackable;
      setSelectedContent(result);

      // if (trackable?.autoBatch?.toString().toLowerCase() === 'no') {
      //   router.push(`/content-details/${identifier}`);
      // } else {
      // router.push(`/details/${identifier}`);
      // }
    } catch (error) {
      console.error('Failed to fetch content:', error);
    }
  };
  useEffect(() => {
    getDetails(identifier as string);
  }, [identifier]);
  const renderNestedChildren = (children: any) => {
    if (!Array.isArray(children)) {
      return null;
    }
    return children?.map((item: any) => (
      <CommonCollapse
        key={item.id}
        identifier={identifier as string}
        title={item.name}
        data={item?.children}
        defaultExpanded={false}
      />
    ));
  };
  const onBackClick = () => {
    router.back();
  };
  return (
    <Layout
      showTopAppBar={{
        title: 'Shiksha',
        showMenuIcon: true,
        menuIconClick: handleMenuClick,
        actionButtonLabel: 'Action',
        actionIcons: [
          {
            icon: <AccountCircleIcon />,
            ariaLabel: 'Account',
            onClick: handleAccountClick,
          },
        ],
      }}
      isFooter={false}
      showLogo={true}
      showBack={true}
      backTitle="Course Details "
      backIconClick={onBackClick}
      sx={{ height: '0vh' }}
    >
      <Box sx={{ width: '100%', marginTop: '70px' }}>
        <Grid container spacing={2}>
          <Grid fontSize={{ xs: 12 }}>
            <Typography
              variant="h6"
              sx={{ marginTop: '60px', fontWeight: 'bold' }}
            >
              {/* {selectedContent?.name} */}
            </Typography>
          </Grid>
        </Grid>

        {selectedContent?.children?.length > 0 &&
          renderNestedChildren(selectedContent.children)}
      </Box>
    </Layout>
  );
}
