<script setup>
import { ref } from 'vue'
import InfoBlock from './InfoBlock.vue'
import DividerComponent from './DividerComponent.vue'
import PhoneIcon from './icons/IconPhone.vue'
import MailIcon from './icons/IconMail.vue'
import ComputerIcon from './icons/IconComputer.vue'
import HouseIcon from './icons/IconHouse.vue'
import { profileText1, profileText2, profileText3 } from '@/data/textContent.js'

const profileText = ref([
  { id: 0, value: profileText1 },
  { id: 1, value: profileText2 },
  { id: 2, value: profileText3 },
])

const education = ref([
  {
    id: 0,
    degree: `Bachelor i informatikk (bioinformatikk)`,
    school: 'Universitetet i Bergen',
    periode: '2016-2020',
  },
  {
    id: 1,
    degree: 'Enkeltemner ved det matematisk-naturvitenskapelige fakultet',
    school: 'Universitetet i Bergen',
    periode: '2020-2021',
  },
])
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
          <div className="eduction" v-for="edu in education" :key="edu.id">
            <p className="bold">{{ edu.degree }}</p>
            <p>{{ edu.school }} | {{ edu.periode }}</p>
          </div>
        </template>
      </InfoBlock>

      <InfoBlock title="Språk">
        <template v-slot:content>
          <div className="flexCenter"></div>
        </template>
      </InfoBlock>
    </div>
    <div className="rightContainer flexCenter">
      <InfoBlock title="Profil">
        <template v-slot:content>
          <div
            className="profile"
            v-for="text in profileText"
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
          <div className="flexCenter"></div>
        </template>
      </InfoBlock>
      <InfoBlock title="Prosjekter">
        <template v-slot:content>
          <div className="flexCenter"></div>
        </template>
      </InfoBlock>
      <InfoBlock title="Kurs">
        <template v-slot:content>
          <div className="flexCenter"></div>
        </template>
      </InfoBlock>
      <InfoBlock title="Sertifiseringer">
        <template v-slot:content>
          <div className="flexCenter"></div>
        </template>
      </InfoBlock>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

.heading {
  width: 100%;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

img {
  border-radius: 50%;
}

.resume {
  display: flex;
  margin-top: 2.5rem;
  background-color: var(--color-background-white);
}

.contentItems {
  width: fit-content;
  margin: 1rem 0;
}

.flexCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contactItem {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.leftContainer {
  flex-basis: 40%;
  padding: 2rem;
  gap: 2rem;
  background-color: var(--color-background-gray);
  justify-content: flex-start;
}

.rightContainer {
  flex: 1;
  padding: 2rem;
  justify-content: flex-start;
}

.profile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  margin: 1rem 0;
}

.bold {
  font-weight: 500;
}

.eduction {
  padding: 1rem;
  text-align: start;
}
</style>
