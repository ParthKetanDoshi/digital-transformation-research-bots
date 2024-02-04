import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ResearchTabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

ResearchTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Deloitte" {...a11yProps(0)} />
          <Tab label="Accenture" {...a11yProps(1)} />
          <Tab label="Capgemini" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <ResearchTabs value={value} index={0}>
      <h1>Research Bot for Deloitte coming soon!</h1>
      </ResearchTabs>
      <ResearchTabs value={value} index={1}>
         <h1>Research Bot for Accenture coming soon!</h1>
      </ResearchTabs>
      <ResearchTabs value={value} index={2}>
         <h1>Research Bot for Accenture coming soon!</h1>
      </ResearchTabs>
    </Box>
  );
}