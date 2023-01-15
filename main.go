package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"

	"github.com/stnokott/r6-dissect-influx/config"
)

const windowTitle string = "R6 Match InfluxDB Exporter"

func openSettings(parent fyne.Window) {
	config.ShowDialog(parent)
}

func main() {
	a := app.New()
	w := a.NewWindow(windowTitle)
	w.Resize(fyne.NewSize(800, 600))

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
