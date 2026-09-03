import prologue
import prologue/middlewares/staticfile

proc index(ctx: Context) {.async.} =
  await ctx.staticFileResponse("index.html", "templates")

proc index2(ctx: Context) {.async.} =
  await ctx.staticFileResponse("index2.html", "templates")

proc lore(ctx: Context) {.async.} =
  await ctx.staticFileResponse("valorant_lore_page.html", "templates")

proc serveRootStatic(ctx: Context) {.async.} =
  await ctx.staticFileResponse(ctx.getPathParams("file"), "static")

let settings = newSettings(
  port = Port(8000),
  debug = true
)

var app = newApp(settings)

app.use(staticFileMiddleware("static"))
app.get("/{file}", serveRootStatic)

app.get("/", index)
app.get("/index2", index2)
app.get("/valorant_lore_page.html", lore)

app.run()
