package router

import (
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

type EmailRequest struct {
	Email string `json:"email"`
}

func StartEcho(tgbot *tgbotapi.BotAPI) {
	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	adminId, err := strconv.ParseInt(os.Getenv("ADMIN_ID"), 10, 64)

	if err != nil {
		log.Fatal("Incorrect admin id")
	}

	handler := func(c echo.Context) error {
		params := new(EmailRequest)

		if err := c.Bind(params); err != nil {
			return err
		}

		message := "На email рассылку подписался " + params.Email

		msg := tgbotapi.NewMessage(adminId, message)

		tgbot.Send(msg)

		return c.String(http.StatusOK, params.Email)
	}

	// Routes
	e.POST("/subscribe", handler)

	// Start server
	e.Logger.Fatal(e.Start(":" + os.Getenv("PORT")))
}
