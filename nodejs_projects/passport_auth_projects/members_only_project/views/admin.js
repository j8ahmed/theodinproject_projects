<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Members Only - Admin Page</title>
  </head>

  <body>

    <div>
      <h1>Admin Page info Goes here</h1>
    </div>

    <! --

    <% if (user) {%>
      <h1>WELCOME BACK <%= user.username %></h1>
      <a href="/log-out">LOG OUT</a>
    <% } else { %>
      <h1>please log in</h1>
      <form action="/log-in" method="POST">
        <label for="username">Username</label>
        <input name="username" placeholder="username" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <button>Log In</button>
      </form>
    <%}%>

    -->
  </body>

</html>



