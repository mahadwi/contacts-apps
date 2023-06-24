import React, { useContext, useEffect, useState } from "react";
import { deleteContact } from "../utils/api";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getContacts } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const {locale} = useContext(LocaleContext);

  useEffect(() => {
    getContacts().then(({data}) => {
      setContacts(data)
    });
  },[]);

  async function onDeleteHandler(id){
    await deleteContact(id);
    
    const {data} = await getContacts();
    setContacts(data);
  }

  function onKeywordChangeHandler(keyword){
    setKeyword(keyword);
    setSearchParams({keyword});
  }

  const filteredContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLocaleLowerCase());
  })

  return(
    <section>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      <h2>{locale === 'id' ? 'Daftar Kontak' : 'Contacts List'}</h2>
      <ContactList
        contacts={filteredContact}
        onDelete={onDeleteHandler}
      />
    </section>
      );
}

export default HomePage;
