export default function Footer() {
return (
<footer style={{
background: '#111827',
color: 'white',
textAlign: 'center',
padding: '12px',
marginTop: '24px'
}}>
© {new Date().getFullYear()} My Cities
</footer>
);
}
