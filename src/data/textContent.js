export const profileText1 = `Sandra er en erfaren frontend-utvikler med bred erfaring fra telekom- og offentlig sektor. Hun har også arbeidet som fullstack-utvikler, men med hovedfokus på frontend, og har utviklet en sterk kompetanse innen rammeverk som React, Next.js, Remix, Vue, samt teknologier som SCSS/CSS, Java og Python.`
export const profileText2 = `Gjennom sine tidligere prosjekter har Sandra bidratt til å utvikle og implementere løsninger som forbedrer brukervennlighet og tilgjengelighet, med særlig fokus på responsivitet og universell utforming. Hennes arbeid med å sette opp React-baserte applikasjoner har resultert i mer effektive og intuitive brukergrensesnitt, som har møtt både kundenes og sluttbrukernes behov. Sandra har omfattende erfaring med smidige utviklingsmetoder som Scrum og Kanban, og hun har benyttet verktøy som Git og Azure DevOps for å sikre sømløse versjonshåndteringer og kontinuerlige leveranser. Hun jobber tett med backend-utviklere og har vært med på å ta viktige valg for å sikre god flyt i applikasjonen.`
export const profileText3 = `Med et sterkt engasjement for brukervennlighet, har hun samarbeidet tett med UX-designere og brukt verktøy som Figma for å sikre at løsningene ikke bare er funksjonelle, men også enkle å bruke. Sandra kombinerer teknisk dyktighet med en forståelse for design og brukeropplevelse, noe som gjør henne til en verdifull ressurs i ethvert prosjekt. Hun er også dedikert til kontinuerlig faglig utvikling, og jobber aktivt med egne frontend-prosjekter samt tar relevante sertifiseringer for å holde seg oppdatert på nye teknologier`

export const profileText = [
  { id: 0, value: profileText1 },
  { id: 1, value: profileText2 },
  { id: 2, value: profileText3 },
]

export const certifications = [
  {
    id: 0,
    name: 'AI-900: Microsoft Azure AI Fundamentals',
    host: 'Pearson VUE',
    periode: '07.2024',
  },
  {
    id: 1,
    name: 'AZ-900: Microsoft Certified: Azure Fundamentals',
    host: 'Pearson VUE',
    periode: '12.2022',
  },
]

export const courses = [
  {
    id: 0,
    name: 'React, Redux and Router Course',
    host: 'Glasspaper',
    periode: '02.2022',
  },
  {
    id: 1,
    name: 'Developing in Vue/React/Svelte/Angular Webinar',
    host: 'Glasspaper Learning AS',
    periode: '01.2022',
  },
]

export const workExperience = [
  {
    id: 0,
    position: 'Systemutvikler',
    company: 'Capgemini Norge',
    periode: '08.2021 - d.d',
  },
  {
    id: 1,
    position: 'Sommerjobb',
    company: 'Digdir',
    periode: '06.2020 - 08.2020',
  },
]

export const education = [
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
]

export const projects = {
  name: 'Kvist – Ny avregningsløsning',
  customer: 'NorgesGruppen Data',
  field: 'Forbrukerprodukter og detaljhandel',
  role: 'Frontend utvikler',
  periode: '05.2023-07.2024',
  technologies:
    'Azure, React, Next.js, Material UI, Postman, Prettier, Tanstack/React Query, Figma, TypeScript, ESLint, Swagger, Azure Cosmos DB, Confluence, Azure Pipelines, DevOps, React Hooks, Scrum',
  projectInformation:
    'KVIST er et internt verktøy for avregning av ulike avtaler mellom de mange partene i kundens verdikjede. Disse avregningene er helt sentrale for kundens forretningsmodell, og resultatet av avregningene er avgjørende for å skape tillit og sikre verdi for alle tilknyttet selskapet. Capgemini har vært partner gjennom hele prosessen, fra innsiktsarbeid helt i starten til produksjonssetting og oppfølging over et år senere. Kunden har hatt høye forventninger til korrekthet, et høyt fokus på sikkerhet og konfidensialitet, et mål om en moderne og tilpasset brukeropplevelse, samt forventning om at løsningen er dynamisk nok til å håndtere fremtidige behov. Løsningen er basert på et fleksibelt og bærekraftig mikrotjeneste-design og er bygget med cloud native-tjenester i kundens Azure-tenant. Design og UX ble spesifisert i Figma, frontend ble utviklet med React og Next.js, og backend er basert på .NET 8 Web API-tjenester skrevet i C# med Dapr som støtte-rammeverk. Løsningen har integrasjoner mot kundens grunndata-plattform, IAM-løsning, datavarehus og regnskapssystemer, og håndterer fortløpende en stor mengde transaksjoner. Alle tjenester er bygget og deployet som docker images i Azure Container Apps. Tjenestene kommuniserer i stor grad meldingsbasert gjennom Azure Service Bus, samt over https/REST.',
  roleInformation:
    'Sandra var den eneste frontend-utvikleren i starten av prosjektet og spilte en avgjørende rolle i å forme frontend-arkitekturen. Hun bidro i prosessen med å velge passende frontend-teknologier. Sandra var ansvarlig for å sette opp applikasjonen med rammeverket Next.js i sin nyeste versjon med App Router. Dette la grunnlaget for en robust og skalerbar applikasjon, og forbedret både ytelsen og navigasjonen i applikasjonen. Sandra bidro med sin frontend-innsikt til flere kritiske moduler i applikasjonen, og sikret at de ble levert til tiden og med høy kvalitet. Hun og teamet introduserte React Hook Form kombinert med Zod for å håndtere store forms. Denne kombinasjonen økte effektiviteten i utviklingen, reduserte mengden kode som måtte forvaltes, og bidro til en smidigere løsning for kunden. Sandra var proaktiv i forbedringen av UI/UX-komponenter og kom med forslag til endringer og forbedringer som gav økt verdi for kunden. Hun tilpasset løsningen i henhold til kundens ønsker og brukte MUI (Material-UI) som komponentbibliotek. MUI er et brukervennlig grensesnittbibliotek som tilbyr forhåndsdefinerte og tilpassbare React-komponenter, noe som gjør utviklingen raskere og enklere. Sandra valgte å bruke en kombinasjon av innebygde MUI-løsninger og egne tilpasninger for å møte kundens behov på en kostnadseffektiv og bærekraftig måte. Sandra var ansvarlig for å sette opp frontend-applikasjonen i de ulike miljøene i Azure, noe som inkluderte deployment og vedlikehold. I tillegg holdt Sandra demoer for både teamet og kunden for å vise frem fremdriften til prosjektet og få tilbakemeldinger fra kunden underveis. Hun tok ledelsen i å identifisere og løse tekniske utfordringer som dukket opp under utviklingen, noe som sikret en jevn og effektiv utviklingsprosess. Hun onboardet flere frontendutviklere og sørget for at de kom raskt i gang med prosjektet.',
}
