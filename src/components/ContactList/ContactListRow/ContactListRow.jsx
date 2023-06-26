import { useDispatch, useSelector } from 'react-redux';
import { DelBtn, TableD, TableRow, Input } from './ContactListRow.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { useMemo, useState } from 'react';
import { selectEditedContactId } from 'redux/contacts/selectors';
import { setEditedContactId } from 'redux/contacts/contactsSlice';

const ContactListRow = contact => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();
  const editedContactId = useSelector(selectEditedContactId);

  const isEdited = useMemo(() => {
    return contact.id === editedContactId;
  }, [contact.id, editedContactId]);

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleEdit = e => {
    const edetedContact = {
      id: contact.id,
      name,
      number,
    };
    dispatch(editContact(edetedContact));
    dispatch(setEditedContactId(null));
  };

  return (
    <TableRow>
      <TableD>
        <Input
          type="text"
          // sx={{ border: 'none', color: 'white' }}
          value={name}
          disabled={!isEdited}
          // id="standard-basic"
          // variant="standard"
          // InputProps={{
          //   disabled: !isEdited,
          // }}
          onChange={event => setName(event.target.value)}
        />
        {/* {name} */}
      </TableD>
      <TableD>
        {' '}
        <Input
          type="tel"
          disabled={!isEdited}
          // id="standard-basic"
          variant="standard"
          value={number}
          InputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            disabled: !isEdited,
          }}
          onChange={event => setNumber(event.target.value)}
        />
      </TableD>
      <TableD>
        {isEdited ? (
          <DelBtn type="submit" onClick={handleEdit}>
            <SaveIcon />
          </DelBtn>
        ) : (
          <DelBtn
            type="button"
            onClick={() => {
              dispatch(setEditedContactId(contact.id));
            }}
          >
            <EditIcon />
          </DelBtn>
        )}

        <DelBtn type="button" onClick={handleDelete}>
          <DeleteForeverIcon />
        </DelBtn>
      </TableD>
    </TableRow>
  );
};

ContactListRow.propeTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListRow;
