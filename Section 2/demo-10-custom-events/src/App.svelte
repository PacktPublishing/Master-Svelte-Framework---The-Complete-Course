<script>
  import Container from './Container.svelte';
  import ChildEvent from './ChildEvent.svelte';
  function onFormSubmit(e) {
    console.log(e);
    const { name, age } = e.detail;
    console.log(name, age, 'details from event');
  }
  function onCustomEvent(e) {
    alert(e.detail);
  }
</script>

<Container
  on:click={() => alert('was clicked')}
  on:form_submit={onFormSubmit}
/>
<ChildEvent on:custom_event={onCustomEvent} />
