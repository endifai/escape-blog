package main

import (
	"EscapeBot/bot"
	"EscapeBot/router"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	tgbot := bot.InitBot()

	go router.StartEcho(tgbot)
	bot.WatchMessages(tgbot)
}
