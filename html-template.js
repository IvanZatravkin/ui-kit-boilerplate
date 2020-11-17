const htmlTemplate = ({attributes, bundle, files, publicPath, title}) => {
    return  `
                    <!DOCTYPE html>
                     <html>
                       <head>
                        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta content="utf-8" http-equiv="encoding">
                        <title>${title}</title>
                       <script type="module" src="/main.js"></script>
                      </head>
                      <body>
                        <div id="root"></div>
                      </body>
                    </html>
                `

}

export default htmlTemplate