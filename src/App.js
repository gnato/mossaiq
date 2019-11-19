import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Tooltip from "@material-ui/core/Tooltip";

import Grid from "./components/Grid";
import GridConfig from "./components/GridConfig";

import useStyles from "./App.styles";

const App = () => {
  const classes = useStyles();

  // drawer
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // render
  const [render, setRender] = useState(false);

  // grid config
  const [gridConfig, setGridConfig] = useState({});

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            MossaIQ
          </Typography>

          <Tooltip title={<FormattedMessage id="app.render" />}>
            <IconButton
              color="inherit"
              disabled={render}
              onClick={() => setRender(true)}
              className={clsx(open && classes.hide)}
            >
              <CloudDownloadIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={<FormattedMessage id="app.grid-config" />}>
            <IconButton
              color="inherit"
              edge="end"
              disabled={render}
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid
          {...gridConfig}
          render={render}
          onRenderComplete={() => setRender(false)}
        />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <FormattedMessage id="app.grid-config" />
          </Typography>
        </div>
        <Divider />
        <div className={classes.drawerBody}>
          <GridConfig onValuesChanged={setGridConfig} />
        </div>
      </Drawer>
    </div>
  );
};

export default App;
