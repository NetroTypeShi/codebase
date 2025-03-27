```bash
#!/bin/bash
# Este script hace una petición a la API y guarda la respuesta JSON en un archivo.

# URL de la API
URL="http://localhost:3000/users"

# Archivo de salida (puedes modificar la ruta según lo necesites)
OUTPUT="/ruta/al/archivo/users.json"

# Realiza la petición con curl y guarda la respuesta en el archivo
curl -s "$URL" -o "$OUTPUT"

# Imprime un mensaje indicando que se actualizó el archivo
echo "El archivo JSON se ha actualizado en $OUTPUT"

chmod +x update_json.sh

./update_json.sh

```

```javascript
app.get("/update-json", (req, res) => {
    // Realiza la consulta a la base de datos
    const query = db.prepare("SELECT * FROM users");
    const users = query.all();

    // Define la ruta donde se guardará el archivo JSON
    const outputPath = path.join(__dirname, 'users.json');

    // Escribe el JSON en el archivo (con formato legible)
    fs.writeFile(outputPath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error("Error al escribir el archivo JSON:", err);
            return res.status(500).json({ error: "No se pudo actualizar el archivo JSON" });
        }
        res.json({ message: "Archivo JSON actualizado correctamente" });
    });
});
```
