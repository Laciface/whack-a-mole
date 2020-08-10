from flask import Flask, render_template, url_for, request

app = Flask('whack-a-mole')


@app.route('/')
def index():
    return render_template('index.html')


def main():
    app.run(debug=True,
            port=5000)


if __name__ == '__main__':
    main()
