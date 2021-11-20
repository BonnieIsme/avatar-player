import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        color: String,
    },

    setup(props) {
        const color = props.color ?? 'black';

        return () => (
            <svg
                style={{
                    position: 'absolute',
                    bottom: '25%',
                    width: '92%',
                    height: '75%',
                    left: '-0.8%',
                }}
                width="261"
                height="240"
                viewBox="0 0 261 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M181.837 90.25C50.8259 80.765 75.9706 150.806 80.1619 179.433C88.323 199.065 100.8253 201.481 99.4581 202.008C79.0664 238.501 50.4555 233.546 31.1209 228.121C21.038 225.292 13.4742 222.334 8.44733 220.094C6.46024 219.208 4.86951 218.434 3.67627 217.825C12.7707 211.141 20.3578 199.682 25.3638 182.675C29.2166 74.5247 44.0087 48.8092 66.3601 30.629C88.7347 12.4301 118.55 1.9109 146.238 1.91092C161.221 1.91093 173.377 4.84484 200.177 20.9616C290.017 80.924 246.24 183.4216 258.336 220.232Q220.336 240.232 198.336 200.232Q210 100 180 90"                    
                    stroke="black"
                    fill={color}
                    stroke-width="4"
                />
            </svg>
        );
    },
});
