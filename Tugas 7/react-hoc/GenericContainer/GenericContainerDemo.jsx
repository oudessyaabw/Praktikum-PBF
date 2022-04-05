import React, { Component } from 'react'
import GenericContainer from './GenericContainerHOC'

class GenericContainerDemo extends Component {
    render() {
        const ContactListWithGenericContainer = GenericContainer({
            reqUrl: 'http://demo4441272.mockable.io/users',
            reqMethod: 'GET',
            resName: 'contacts'
        })(ContactList)

        return (
            <div className="contactApp">
                <ContactListWithGenericContainer />
            </div>
        )
    }
}

const ContactList = ({ contacts }) => {
    return (
        <div>
            <ul>
                {contacts.map(
                    (contact) => <li key={contact.email}>
                        <img src={contact.photo} width="100px" alt="presentation" />
                        <div className="contactData">
                            <h4>{contact.name}</h4>
                            <small>{contact.email}</small> <br /><small> {contact.phone}</small>
                        </div>

                    </li>
                )}
            </ul>
        </div>
    )
}

export default GenericContainerDemo
