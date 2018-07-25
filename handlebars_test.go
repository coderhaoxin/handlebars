package handlebars

import . "github.com/smartystreets/goconvey/convey"
import "io/ioutil"
import "testing"
import "path"

func TestHandlebars(t *testing.T) {
	Convey("handlebars - basic", t, func() {
		render := New(map[string]interface{}{
			"dir": "./template",
		})

		Convey("parse", func() {
			// debug("dir: %s, ext: %s, cacheLimit: %d", render.dir, render.ext, render.cacheLimit)

			ctx := map[string]string{
				"name": "haoxin",
			}

			output := render.Parse("name: {{name}}", ctx)
			So(output, ShouldEqual, "name: haoxin")
			// todo: check this is from cache
			output = render.Parse("name:{{name}}", ctx)
			So(output, ShouldEqual, "name:haoxin")
		})

		Convey("render", func() {
			expected := readTestFile("index")

			output := render.Render("index", map[string]interface{}{
				"title": "test",
				"body":  "<pre>hello world</pre>",
				"users": []User{{
					Name: "haoxin",
					Age:  2,
				}, {
					Name: "xin",
					Age:  1,
				}}})
			So(output, ShouldEqual, expected)
			// todo: check this is from cache
			output = render.Render("index", map[string]interface{}{
				"title": "test",
				"body":  "<pre>hello world</pre>",
				"users": []User{{
					Name: "haoxin",
					Age:  2,
				}, {
					Name: "xin",
					Age:  1,
				}}})
			So(output, ShouldEqual, expected)
		})

		Convey("read file", func() {
			So(readTestFile("test"), ShouldEqual, "<h1>test</h1>\n")
		})
	})

	Convey("handlebars - New", t, func() {
		render := New(map[string]interface{}{
			"dir": "./template",
		})

		render.RegisterPartial("register-partial", "partial.hbs")
		render.RegisterPartials(".")

		So(get(render.partials, "register-partial"), ShouldEndWith, "/template/partial.hbs")
		So(get(render.partials, "partial"), ShouldEndWith, "/template/partial.hbs")
	})

	Convey("handlebars - partial", t, func() {
		render := New(map[string]interface{}{
			"dir": "./template/partial",
		})
		// not register `p1` to test notInPartials
		render.RegisterPartial("p", "p1.hbs")
		render.RegisterPartials("sub")

		So(get(render.partials, "p"), ShouldEndWith, "/template/partial/p1.hbs")
		// So(get(render.partials, "p1"), ShouldEndWith, "/template/partial/p1.hbs")
		So(get(render.partials, "p2"), ShouldEndWith, "/template/partial/sub/p2.hbs")

		So(render.Render("index"), ShouldEqual, "p1\n\np1\n\np2\n\n")
	})
}

func readTestFile(filename string) string {
	var abs string

	if len(path.Ext(filename)) == 0 {
		abs = resolve("template/result", filename) + ".txt"
	} else {
		abs = resolve("template/result", filename)
	}

	bytes, err := ioutil.ReadFile(abs)
	panicError(err)

	return string(bytes)
}

func get(m map[string]string, k string) string {
	s, ok := m[k]
	if ok {
		return s
	} else {
		return ""
	}
}
