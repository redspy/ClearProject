window.alert = function(m, cls) {
    cls = cls || 'neutral';

    var style = {
        position: 'fixed',
        top: 10,
        padding: 10,
        zIndex: 2000,
        borderRadius: 5,
        fontWeight: 'bold'
    };

    var styles = {
        neutral: {
            backgroundColor: '#D9EDF7',
            borderColor: '#D9EDF7',
            color: '#31708F'
        },
        good: {
            backgroundColor: '#DFF0D8',
            borderColor: '#DFF0D8',
            color: '#3C763D'
        },
        okay: {
            backgroundColor: '#FCF8E3',
            borderColor: '#FAEBCC',
            color: '#8A6D3B'
        },
        bad: {
            backgroundColor: '#F2DEDE',
            borderColor: '#EBCCD1',
            color: '#A94442'
        }
    };

    var el = $('<div>');
    el.text(m).css(style).css(styles[cls]).hide().appendTo('body');
    el.css('left', ($('body').width() - el.width()) / 2);

    el.fadeIn().delay(5000).fadeOut(function() {
        $(this).remove();
    });
};
