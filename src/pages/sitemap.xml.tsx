import { GetServerSideProps } from 'next'

import React from 'react'

const Sitemap: React.FC = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    if (res) {

        const { site, notes } = (await (await fetch("https://collectednotes.com/" + process.env.CN_SITE_PATH,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })).json());

        // fetch all pages
        if (notes.length < site.total_notes) {
            for await (let page of Array.from(
                { length: Math.ceil(site.total_notes / 40) },
                (_, index) => index + 1
            )) {
                if (page === 1) continue;

                const res = (await (await fetch("https://collectednotes.com/" + process.env.CN_SITE_PATH,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })).json());

                notes.push(...res.notes);
            }
        }

        res.setHeader('Content-Type', 'text/xml')
        res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

        notes.forEach((note) => 
            res.write("<url><loc>https://thecibrax.com/" + note.path + "</loc><lastmod>" + note.updated_at + "</lastmod></url>")
        );

        res.write(`</urlset>`);
        
        res.end()
    }
    return {
        props: {},
    }
}

export default Sitemap