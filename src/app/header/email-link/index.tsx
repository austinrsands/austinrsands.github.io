import React from 'react';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import IconLink, { IconLinkProps } from '../../../lib/icon-link';

const EmailLink: React.FC<
  Omit<IconLinkProps, 'icon' | 'label' | 'color' | 'href' | 'target' | 'rel'>
> = (props) => (
  <IconLink
    icon={<EmailRoundedIcon />}
    label="austinrsands@gmail.com"
    href="mailto:austinrsands@gmail.com"
    {...props}
  />
);

export default EmailLink;
