import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';

const AdminNav = () => {
  const links = [
    {
      title: 'Category',
      linkTo: '/admin_category',
    },
    {
      title: 'Edit Category',
      linkTo: '/admin_category/edit',
    },
    {
      title: 'Items',
      linkTo: '/admin_items',
    },
    {
      title: 'Edit Items',
      linkTo: '/admin_items/edit',
    },
  ];

  const style = {
    color: '#ffffff',
    fontWeight: '300',
    borderBottom: '1px solid #353535',
  };

  const renderItems = () =>
    links.map(link => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ));

  const logoutHandlers = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log('Log out successful');
        },
        error => {
          console.log('Error loggin out');
        },
      );
  };

  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => logoutHandlers()}>
        Log Out
      </ListItem>
    </div>
  );
};

export default AdminNav;
