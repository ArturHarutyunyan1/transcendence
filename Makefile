all: up

re: clean build

up:
	@docker compose up --build

down:
	@docker compose down

clean: down
	@docker compose down --rmi all
	@docker system prune --force --all

fclean: down	
	@docker-compose down --rmi all
	@docker system prune --volumes --force --all

.PHONY: all re up down  clean fclean
