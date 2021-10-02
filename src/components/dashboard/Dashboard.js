import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DashBoardCertifications from "./DashBoardCertifications";
import MarketBanner from "./MarketBanner";
import Orders from "./Orders";

function DashboardContent() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* 내 인증서 */}
        <Grid item xs={12} md={8} lg={8}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              height: 350,
              marginRight: 4,
            }}
          >
            <DashBoardCertifications />
          </Paper>
        </Grid>
        {/* Recent MarketBanner */}
        <Grid item xs={12} md={4} lg={4}>
          {/**오른쪽 카드 */}

          <MarketBanner />
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
