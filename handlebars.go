package handlebars

import "path/filepath"
import "strings"
import "path"
import "os"

type Render struct {
	dir        string
	ext        string
	cache      map[string]*Template
	cacheLimit int
	helpers    map[string]interface{}
	partials   map[string]string
}

func New(conf map[string]interface{}) *Render {
	r := new(Render)
	r.cache = map[string]*Template{}
	// r.helpers = map[string]interface{}
	r.partials = make(map[string]string)

	if v, ok := conf["dir"]; true {
		if ok {
			r.dir = parseConfigDir(v.(string))
		} else {
			r.dir, _ = os.Getwd()
		}
	}

	if v, ok := conf["ext"]; true {
		if ok {
			s := v.(string)
			if strings.HasPrefix(s, ".") {
				r.ext = s
			} else {
				r.ext = "." + s
			}
		} else {
			r.ext = ".hbs"
		}
	}

	if v, ok := conf["cacheLimit"]; true {
		if ok {
			i := v.(int)

			if i < 0 {
				r.cacheLimit = 0
			} else {
				r.cacheLimit = i
			}
		} else {
			r.cacheLimit = 50
		}
	}

	return r
}

// public
func (r *Render) Parse(data string, context ...interface{}) string {
	return r.getTemplate(data, false).Render(context...)
}

func (r *Render) Render(filename string, context ...interface{}) string {
	return r.getTemplate(filename, true).Render(context...)
}

// func (r *Render) RegisterHelper(name string, helper interface{}) {}

func (r *Render) RegisterPartial(name string, filename string) {
	r.partials[name] = resolve(r.dir, filename)
}

func (r *Render) RegisterPartials(dir string) {
	abs := resolve(r.dir, dir)
	d, err := os.Open(abs)
	defer d.Close()

	if err != nil {
		panic(err)
	}

	files, err := d.Readdir(-1)

	for _, f := range files {
		if f.IsDir() {
			continue
		}

		name := f.Name()

		// ignore .* files
		if strings.HasPrefix(name, ".") {
			continue
		}

		ext := filepath.Ext(name)

		r.partials[name[0:len(name)-len(ext)]] = resolve(abs, name)
	}
}

// private
func (r *Render) getAbsPath(filename string) string {
	abs := resolve(r.dir, filename)

	if len(path.Ext(abs)) == 0 {
		return abs + r.ext
	}

	return abs
}

func (r *Render) getTemplate(s string, isPath bool) *Template {
	if isPath {
		abs := r.getAbsPath(s)
		tmpl, ok := r.cache[abs]

		if ok {
			// debug("from cache")
			return tmpl
		}

		tmpl, err := parseFile(abs, config{partials: r.partials})
		// debug("parse file: %s", abs)
		panicError(err)

		r.addToCache(abs, tmpl)

		return tmpl
	}

	key := hash(s)
	tmpl, ok := r.cache[key]

	if ok {
		// debug("from cache")
		return tmpl
	}

	tmpl, err := parseString(s, config{partials: r.partials})
	// debug("parse string: %v", s)
	panicError(err)

	r.addToCache(key, tmpl)

	return tmpl
}

func (r *Render) addToCache(key string, tmpl *Template) {
	if len(r.cache) > r.cacheLimit {
		return
	}

	// debug("add to cache")
	r.cache[key] = tmpl
}

func parseConfigDir(s string) string {
	if filepath.IsAbs(s) {
		return s
	}

	abs, err := filepath.Abs(s)

	if err != nil {
		panic("invalid dir")
	}

	return abs
}

func parseConfigPartials() {

}
