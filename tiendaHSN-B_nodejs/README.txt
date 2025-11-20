1. Instalamos typescript en el proyecto de node (te situas en el directorio del proyecto de nodejs)

npm install typescript --save-dev <--- en el paquete hay una herramienta: tsc 
                                        mediante esta herramienta traduciremos codiog ts a js puro 

                                        para ejecutar esta heramienta dentro del paquete typescript:
                                        npm execute tsc ...
                                        npx tsc ...

2. Inicializamos proyecto typescript dentro e node:
npm tsc --init <-- crea en el raiz del directiorio del proyecto un fichero "tsconfig.json"
                    es un JSON con opciones de configuracion de typescript

3. Cada vez que instalas un paquete de node, debes instalar despues el paquete extra para los tipos en "typescript" del mismo 
    ej:
    instalamos los tipos typescript para node: npm install @types/node --save-dev
        - instalamos express:
            npm install express --save
            npm install @types/express --save-dev

        - instalamos mongoose
            npm install mongoose --save
            npm install @types/mongoose --save-dev
        
        - instalamos dotenv
            npm install dotenv --save
            npm install @types/dotenv --save-dev
        
        - instalamos bcrypt
            npm install bcrypt --save
            npm install @types/bcrypt --save-dev
        
        - instalamos cors
            npm install cors --save
            npm install @types/cors --save-dev