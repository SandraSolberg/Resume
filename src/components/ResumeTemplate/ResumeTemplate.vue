<script setup>
import { ref } from 'vue'
import InfoBlock from '../InfoBlock.vue'
import DividerComponent from '../DividerComponent.vue'
import PhoneIcon from '../icons/IconPhone.vue'
import MailIcon from '../icons/IconMail.vue'
import ComputerIcon from '../icons/IconComputer.vue'
import HouseIcon from '../icons/IconHouse.vue'
import {
  education,
  profileText,
  projects,
  certifications,
  courses,
  workExperience,
} from '@/data/textContent.js'
import './resumeTemplate.css'

const profileTextRef = ref(profileText)

const educationRef = ref(education)

const workExperienceRef = ref(workExperience)

const coursesRef = ref(courses)

const certificationsRef = ref(certifications)

const projectsRef = ref(projects)
</script>

<template>
  <div className="resume">
    <div className="leftContainer flexCenter">
      <img src="" />
      <header>
        <img
          alt="Picture of Sandra"
          src="@/assets/images/sandra.jpg"
          width="185"
          height="185"
        />
      </header>

      <div className="heading">
        <h1>Sandra Solberg</h1>
        <DividerComponent />
        <h2>Frontend utvikler</h2>
      </div>

      <InfoBlock title="Kontakt">
        <template v-slot:content>
          <div className="flexCenter">
            <div className="contentItems">
              <div className="contactItem">
                <PhoneIcon />
                <a href="tel:+4795212517">+4795212517</a>
              </div>
              <div className="contactItem">
                <MailIcon />
                <a href="mailto:sandsol97@gmail.com">sandsol97@gmail.com</a>
              </div>
              <div className="contactItem">
                <ComputerIcon />
                <a href="https://www.sandrasolberg.no/">sandrasolberg.no</a>
              </div>

              <div className="contactItem">
                <HouseIcon />
                <p>Oslo, Norge</p>
              </div>
            </div>
          </div>
        </template>
      </InfoBlock>

      <InfoBlock title="Utdanning">
        <template v-slot:content>
          <div
            className="educationBlock"
            v-for="edu in educationRef"
            :key="edu.id"
          >
            <p className="bold">{{ edu.degree }}</p>
            <p>{{ edu.school }} | {{ edu.periode }}</p>
          </div>
        </template>
      </InfoBlock>

      <InfoBlock title="Språk">
        <template v-slot:content>
          <div className="flexCenter sectionBlock">
            <ul>
              <li className="bold">Norsk <span> - Morsmål</span></li>
              <li className="bold">Engelsk <span> - Flytende</span></li>
              <li className="bold">Italiensk <span> - Nybegynner</span></li>
            </ul>
          </div>
        </template>
      </InfoBlock>
    </div>
    <div className="rightContainer flexCenter">
      <InfoBlock title="Profil">
        <template v-slot:content>
          <div
            className="profile"
            v-for="text in profileTextRef"
            v-bind:key="text.id"
          >
            <p>
              {{ text.value }}
            </p>
          </div>
        </template>
      </InfoBlock>
      <InfoBlock title="Ansettelser">
        <template v-slot:content>
          <div
            className="sectionBlock"
            v-for="work in workExperienceRef"
            v-bind:key="work.id"
          >
            <p className="bold">{{ work.position }}</p>
            <div className="companyInfo">
              <p>{{ work.company }}</p>
              <p>{{ work.periode }}</p>
            </div>
          </div>
        </template>
      </InfoBlock>
      <InfoBlock title="Prosjekter">
        <template v-slot:content>
          <div className="sectionBlock projectBlock">
            <div>
              <h4 className="bold">{{ projectsRef.name }}</h4>
              <div className="companyInfo">
                <p>{{ projectsRef.customer }}</p>
                <p>{{ projectsRef.periode }}</p>
              </div>
            </div>

            <div>
              <p className="bold">Rolle</p>
              <p>Frontend utvikler</p>
            </div>

            <div>
              <p className="bold">Prosjekt</p>
              <p>{{ projectsRef.projectInformation }}</p>
            </div>

            <div>
              <p className="bold">Metode og teknologier</p>
              <p>{{ projectsRef.technologies }}</p>
            </div>

            <div>
              <p className="bold">Frontend Utvikler</p>
              <p>{{ projectsRef.roleInformation }}</p>
            </div>
          </div>
        </template>
      </InfoBlock>

      <InfoBlock title="Sertifiseringer">
        <template v-slot:content>
          <div
            className="sectionBlock"
            v-for="cert in certificationsRef"
            v-bind:key="cert.id"
          >
            <p className="bold">{{ cert.name }}</p>
            <div className="companyInfo">
              <p>{{ cert.host }}</p>
              <p>{{ cert.periode }}</p>
            </div>
          </div>
        </template>
      </InfoBlock>

      <InfoBlock title="Kurs">
        <template v-slot:content>
          <div
            className="sectionBlock"
            v-for="course in coursesRef"
            v-bind:key="course.id"
          >
            <p className="bold">{{ course.name }}</p>
            <div className="companyInfo">
              <p>{{ course.host }}</p>
              <p>{{ course.periode }}</p>
            </div>
          </div>
        </template>
      </InfoBlock>
    </div>
  </div>
</template>
