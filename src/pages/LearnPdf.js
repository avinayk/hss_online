import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Productive from '../components/Productive'

export default function LearnPdf() {
    return (
        <div>
            <Header />
            <div style={{ height: '90vh', overflow: 'hidden' }}>
                <iframe
                    src="/SPAN-Sub-Sea-Catalog-2016-v3.pdf"
                    width="100%"
                    height="100%"
                    title="PDF Document"
                />
            </div>
               <Productive />
               <Footer />
        </div >
    )
}
