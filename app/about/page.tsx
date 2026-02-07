import AboutBanner from '@/components/sections/about_Banner/aboutBanner'
import Expertise from '@/components/sections/about_expertise/Expertise'
import AboutUs from '@/components/sections/about_Us/AboutUs'
import CommunitySection from '@/components/sections/counter/counter'
import OurStory from '@/components/sections/ourStory/story'
import ContactUs from "../../components/sections/about_Contact/ContactUs"
import React from 'react'

export default function About() {
  return (
    <>
        <AboutBanner/>
        <AboutUs/>
        <OurStory/>
        <CommunitySection/>
        <Expertise/>
        <ContactUs/>
    </>
  )
}
