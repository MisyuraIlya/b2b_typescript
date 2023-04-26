import React from 'react';
import DatePicker from './components/DatePicker/DatePicker';
import DocumentList from './components/DocumentList/DocumentList';
import DocumentTypes from './components/DocumentTypes/DocumentTypes';
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from './constructor';
import './DocumentsModule.styles.scss'
import {Heading} from './constructor';
const DocumentsModule = () => {
    return (
        <div className='DocumentsModule'>
            <Container>
                <Heading>מסמכים שלי</Heading>
                <DatePicker/>
                <DocumentTypes/>
                <SearchBar/>
                <DocumentList/>
            </Container>
        </div>
    );
};

export default DocumentsModule;