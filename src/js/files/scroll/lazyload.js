import LazyLoad from "vanilla-lazyload";

// Работает с объектами с класом .lazyAll
const loadLazy = function() {
	function logElementEvent(eventName, element) {
		console.log(Date.now(), eventName, element.getAttribute("data-src"));
	}

	//запускаесть когда эл в зоне видимости
	const callback_enter = function (element) {
		logElementEvent("🔑 ENTERED", element);
	};

	//запускается когда эл в не зоны видимости
	const callback_exit = function (element) {
		logElementEvent("🚪 EXITED", element);
	};

	//как только эл начал загружаться
	const callback_loading = function (element) {
		logElementEvent("⌚ LOADING", element);
	};

	//когда эл загрузился
	const callback_loaded = function (element) {
		logElementEvent("👍 LOADED", element);
	};

	//когда произошла ошибка
	const callback_error = function (element) {
		logElementEvent("💀 ERROR", element);
		element.src =
			"https://via.placeholder.com/440x560/?text=Error+Placeholder";
	};

	//когда все эл загружены
	const callback_finish = function () {
		logElementEvent("✔️ FINISHED", document.documentElement);
	};

	//когда загрузка отменяется во время загрузки
	const callback_cancel = function (element) {
		logElementEvent("🔥 CANCEL", element);
	};

	const ll = new LazyLoad({
		elements_selector: '.lazyAll',
		// callback_enter: callback_enter,
		// callback_exit: callback_exit,
		// callback_cancel: callback_cancel,
		// callback_loading: callback_loading,
		// callback_loaded: callback_loaded,
		// callback_error: callback_error,
		// callback_finish: callback_finish
	});
}
loadLazy();

// Обновить модуль
//lazyMedia.update();

