import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Detail = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div style={{ padding: "0px 20px" }}>
      <h3 style={{ color: "grey" }}>Bulaq kompleksi</h3>
      <hr style={{ border: "1px solid #EFEFEF" }} />
      <h4>Xadimə</h4>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="İşin təsviri" value="1" />
              <Tab label="Şirkət haqqında" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <h4>İşiniz nələrdən ibarət olacaq?</h4>
            <p>- Rəhbərliyin iştirak etdiyi iclaslarda, konfranslarda, onlayn görüşlərdə tərcümə fəaliyyətini yerinə yetirmək; </p>
            <p> - Tərcümə zamanı qrammatika qaydalarına dəqiqliklə riayət etmək, müvafiq üslubu gözləmək, tam peşəkar səviyyədə işi təhvil vermək;</p>
            <p> - Rəhbərlik tərəfindən təqdim edilən sənədlərin tərcüməsini dəqiqliklə təmin etmək;</p>
            <p> - Məxfi məlumatlarla işləmək, onların gizliliyini qoruyub saxlamaq.</p>
            <h4>İşinizi görmək üçün sizdən nələri tələb edirik?</h4>
            <p>- Rəhbərliyin iştirak etdiyi iclaslarda, konfranslarda, onlayn görüşlərdə tərcümə fəaliyyətini yerinə yetirmək; </p>
            <p> - Tərcümə zamanı qrammatika qaydalarına dəqiqliklə riayət etmək, müvafiq üslubu gözləmək, tam peşəkar səviyyədə işi təhvil vermək;</p>
            <p> - Rəhbərlik tərəfindən təqdim edilən sənədlərin tərcüməsini dəqiqliklə təmin etmək;</p>
            <p> - Məxfi məlumatlarla işləmək, onların gizliliyini qoruyub saxlamaq.</p>

            <p>Vakansiyaya müraciət üçün https://hr.mktcotton.com/az/job/tercumechi-1/apply bu linkə müraciət edə və ya career@mktcotton.com email adresindən istifadə edə bilərsiniz.</p>
          </TabPanel>
          <TabPanel value="2">
            <h4>Şirkət haqqında</h4>
            <p>“MKT İstehsalat Kommersiya” MMC iqtisadiyyatımızın qeyri-neft sektorunda 25 ildən artıq iş təcrübəsinə malikdir. Şirkətimizin əsas fəaliyyəti ölkəmizin ağ qızılı olan pambığın yetişdirilməsi, tədarükü və pambıqtəmizləmə müəssisələrimizdə emalından ibarətdir.
              Şirkətimiz xam pambıqdan əsasən mahlıc, çiyid habelə lint, uluk və tiftik əldə edərək iplik, pambıq yağı, pambıq toxumu və jımıx istehsalını həyata keçirməkdədir. Bu məhsullar əsasən Türkiyə, İran, Rusiya və digər MDB ölkələrinə ixrac edilir.</p>
          </TabPanel>
        </TabContext>
      </Box>


    </div>
  )
}

export default Detail