package main

import (
	"log"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"

	"github.com/stnokott/r6-dissect-influx/internal/config"
	"github.com/stnokott/r6-dissect-influx/internal/constants"
)

const windowTitle string = "R6 Match InfluxDB Exporter"

func openSettings(parent fyne.Window) {
	config.ShowDialog(parent)
}

func main() {
	// TODO: display in UI
	log.Printf("%s - v%s - %s - compiled %s", constants.ProjectName, constants.Version, constants.Commit, constants.CompileTime)

	a := app.NewWithID(constants.APP_ID)

	w := a.NewWindow(windowTitle)
	w.Resize(fyne.NewSize(800, 600))

	config.Init(a)

	toolbar := widget.NewToolbar(
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(
			theme.SettingsIcon(),
			func() { openSettings(w) },
		),
	)

	w.SetContent(container.NewBorder(
		toolbar,
		nil,
		nil,
		nil,
		widget.NewLabel("<Placeholder>"),
	))

	w.ShowAndRun()
}