import { NextPage } from "next"
import { Layout } from "../components/layouts"
import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import { EntryList } from '../components/ui/EntryList';
import { NewEntry } from "../components/ui";
import { useHasMounted } from '../utils/';

const HomePage: NextPage = () => {
  const hasMounted = useHasMounted();
  // useHydrateAtoms([[entriesAtom, initialEntry]] as const)

  if (!hasMounted) {
    return null
  }

  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title={'Pendientes'} sx={{ textAlign: 'center' }} />
            <CardContent>
              <NewEntry />
              <EntryList key={'pending'} status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title={'En progreso'} sx={{ textAlign: 'center' }} />
            <CardContent>
              <EntryList key={"in-progress"} status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title={'Completados'} sx={{ textAlign: 'center' }} />
            <CardContent>
              <EntryList key={"finished"} status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage